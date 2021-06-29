require 'stringex'
require 'highline/import'

desc "Create a new post"
task :new_post, :title do |t, args|
  mkdir_p './content/blog'
  args.with_defaults(:title => 'New Blog Post')
  title = args.title.capitalize
  if title.include?('"')
    title = title.gsub('"', '\"')
  end

  dirname = "./content/blog/#{Time.now.strftime('%Y-%m-%d')}-#{title.to_url}"  # include datestamp in title
  # dirname = "./content/blog/#{url_title}" # A default name without datestamp
  filename = "#{dirname}/index.md"
  if Dir.exists?(dirname)
      abort('rake aborted! Directory name already exists.') if ask("#{dirname} already exists. Want to overwrite? y, n", ['y', 'n']) == 'n'
  end

  mkdir_p dirname

  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    post.puts '---'
    post.puts "title: \"#{title}\""
    post.puts "author:  # Optional"
    post.puts "subtitle:  # Optional"
    post.puts "created_at: #{Time.now}"
    post.puts 'kind: article'
    post.puts "header_class:  # Default defined in blog layout"
    post.puts "header_image:  # Optional. If image specified, header_class automatically assigned, else default"
    post.puts "---\n\n"
  end


# Autogenerating was causing a permissions issue, so chown all blog files to belong to user
stat = File.stat('.git')
sh "chown -Rf #{stat.uid}:#{stat.gid} content/blog"
end
