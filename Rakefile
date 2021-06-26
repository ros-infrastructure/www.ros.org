desc "Create a new post"
task :new_post, :title do |t, args|
  mkdir_p './content/blog'
  args.with_defaults(:title => 'New Blog Post')
  url_title = args.title.split(' ').join('-').downcase
  title = url_title.split('-').join(' ').capitalize
  filename = "./content/blog/#{Time.now.strftime('%Y-%m-%d')}-#{url_title}.md"

  if File.exist?(filename)
    abort('rake aborted!') if ask("#{filename} already exists. Want to overwrite?", ['y','n']) == 'n'
  end

  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    post.puts '---'
    post.puts "title: \"#{title}\""
    post.puts "subtitle: '' # Optional"
    post.puts "created_at: #{Time.now}"
    post.puts 'kind: article'
    post.puts "header_class: '' # Default defined in blog layout"
    post.puts "header_image: '' # Optional, default defined in blog layout. If image specified, header_class automatically assigned"
    post.puts 'published: false'
    post.puts "---\n\n"
  end
end
